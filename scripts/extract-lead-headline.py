#!/usr/bin/env python3
"""Extract the Lead article headline from an issue HTML file.

Usage:
  python3 scripts/extract-lead-headline.py issues/issue-11.html

Prints the headline plain text to stdout. Empty string if not found.
"""
import re
import sys

if len(sys.argv) != 2:
    print("usage: extract-lead-headline.py <path-to-issue.html>", file=sys.stderr)
    sys.exit(2)

with open(sys.argv[1]) as f:
    text = f.read()

m = re.search(
    r'<div class="section-label">Lead</div>.*?<h2[^>]*>(.*?)</h2>',
    text,
    re.DOTALL,
)
if m:
    headline = re.sub(r'<[^>]+>', '', m.group(1)).strip()
    print(headline)
