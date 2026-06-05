#!/usr/bin/env python3
"""Extract the Lead article headline from an issue HTML file.

Usage:
  python3 scripts/extract-lead-headline.py issues/issue-11.html

Prints the headline plain text to stdout. Empty string if not found.
"""
import html
import re
import sys

if len(sys.argv) != 2:
    print("usage: extract-lead-headline.py <path-to-issue.html>", file=sys.stderr)
    sys.exit(2)

with open(sys.argv[1]) as f:
    text = f.read()


def clean(fragment):
    # Drop the inline reading-time span, then any remaining tags.
    fragment = re.sub(
        r'<span[^>]*class="section-time"[^>]*>.*?</span>', '', fragment, flags=re.DOTALL
    )
    fragment = re.sub(r'<[^>]+>', '', fragment)
    return html.unescape(fragment).strip()


# Primary: the Lead is the <section> carrying the `lead-article` class; its
# headline is the first <h2> inside it. The visible section-label is a concern
# name (e.g. "Wider Engineering Landscape"), not the literal word "Lead", so
# match on the structural class rather than the label text.
m = re.search(
    r'<section[^>]*class="[^"]*\blead-article\b[^"]*"[^>]*>.*?<h2[^>]*>(.*?)</h2>',
    text,
    re.DOTALL,
)

# Fallback: older issues used a literal `<div class="section-label">Lead</div>`.
if not m:
    m = re.search(
        r'<div class="section-label">Lead</div>.*?<h2[^>]*>(.*?)</h2>',
        text,
        re.DOTALL,
    )

if m:
    print(clean(m.group(1)))
