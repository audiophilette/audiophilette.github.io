---
layout: page
title: Downloads
---

{% assign downloads = site.static_files | where_exp: "file", "file.path contains '/downloads/'" | sort: "path" %}

{% for file in downloads %}
  {% assign parts = file.path | split: "/" %}
  {% assign folder = parts[2] %}

  {% if folder != previous_folder %}
    <h2>{{ folder }}</h2>
    {% assign previous_folder = folder %}
  {% endif %}

  <p>
    <a href="{{ file.path | relative_url }}">
      {{ file.name }}
    </a>
  </p>
{% endfor %}
