---
layout: page
title: Practical Self Defense for Young Wizards
icon: fas fa-book
order: 3 
permalink: /practical/
---

*By Sensurround Q. Catgirl*

## Download the Book

{% assign book_files = site.static_files | where_exp: "file", "file.path contains '/downloads/practicalSelf/'" %}

{% for file in book_files %}
{% assign ext = file.extname | downcase %}
{% if ext == '.epub' or ext == '.pdf' or ext == '.zip' %}
- **[Download {% if ext == '.zip' %}Markdown + Images (ZIP){% else %}{{ ext | remove: '.' | upcase }}{% endif %}]({{ file.path | relative_url | uri_escape }})**
{% endif %}
{% endfor %}

---

*This is an unofficial work of fan fiction.*
