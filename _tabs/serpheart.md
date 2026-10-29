---
layout: page
title: Harry Potter and the Serpent's Heart
icon: fas fa-book
order: 2
permalink: /serpent/
---

# Harry Potter and the Serpent's Heart

*By Sensurround Q. Catgirl*

## Download the Book

{% assign book_files = site.static_files | where_exp: "file", "file.path contains '/downloads/serpentsHeart/'" %}

{% for file in book_files %}
{% assign ext = file.extname | downcase %}
{% if ext == '.epub' or ext == '.pdf' or ext == '.zip' %}
- **[Download {% if ext == '.zip' %}Markdown + Images (ZIP){% else %}{{ ext | remove: '.' | upcase }}{% endif %}]({{ file.path | relative_url | uri_escape }})**
{% endif %}
{% endfor %}

---

*This is an unofficial work of fan fiction.*
