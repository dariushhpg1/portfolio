#!/usr/bin/env python3
"""Build a browser-ready, dependency-free preview from the actual portfolio.ts data and CSS."""
from pathlib import Path
import re
import json5

import base64
import mimetypes

def to_data_uri(path: Path):
    mime = mimetypes.guess_type(path.name)[0] or 'application/octet-stream'
    b64 = base64.b64encode(path.read_bytes()).decode('ascii')
    return f'data:{mime};base64,{b64}'
from jinja2 import Environment, FileSystemLoader, select_autoescape

root = Path(__file__).resolve().parents[1]
data_text = (root / 'src/data/portfolio.ts').read_text()

def parse_assignment(text, name):
    match = re.search(r'\b(?:const|export const)\s+' + re.escape(name) + r'\s*(?::\s*[^=]+)?\s*=\s*', text)
    if not match: raise ValueError('No variable: ' + name)
    at = match.end()
    opening = text[at]
    assert opening in '[{', (name, opening)
    closing = ']' if opening == '[' else '}'
    depth, quote, escape = 0, None, False
    for pos in range(at, len(text)):
        ch = text[pos]
        if quote:
            if escape: escape = False
            elif ch == '\\': escape = True
            elif ch == quote: quote = None
        elif ch in ('"', "'", '`'): quote = ch
        elif ch == opening: depth += 1
        elif ch == closing:
            depth -= 1
            if depth == 0:
                return json5.loads(text[at:pos+1])
    raise ValueError('Unclosed expression: ' + name)

names = ('profile', 'projects', 'capabilities', 'experience', 'articles', 'skillGroups')
context = {name: parse_assignment(data_text, name) for name in names}
# Inline local images so preview.html and screenshots work without a web server
profile = context['profile']
if profile.get('avatar'):
    profile['avatarDataUri'] = to_data_uri(root / 'public' / profile['avatar'])
for project in context['projects']:
    if project.get('coverImage'):
        project['coverImageDataUri'] = to_data_uri(root / 'public' / project['coverImage'])
for article in context['articles']:
    if article.get('image') and not str(article['image']).startswith('http'):
        article['imageDataUri'] = to_data_uri(root / 'public' / article['image'])
css = (root / 'src/styles/global.css').read_text().replace('@import "tailwindcss";', '')
context['faviconDataUri'] = to_data_uri(root/'public/images/favicon.png')
context['bluLogoDataUri'] = to_data_uri(root/'public/images/blu-bank-logo.png')
context['css'] = css
engine = Environment(loader=FileSystemLoader(root / 'scripts'), autoescape=select_autoescape(['html']))
html = engine.get_template('preview_template.html').render(**context)
(root / 'preview.html').write_text(html)
print(f'Generated preview.html ({len(html):,} characters) / {len(context["projects"])} work projects, {len(context["articles"])} articles')
