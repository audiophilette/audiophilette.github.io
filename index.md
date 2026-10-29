---
layout: home
title: Welcome
---

# Plastic Skillet Publishing

Welcome to the literary home of Sensurround Q. Catgirl.

Here you'll find original fiction, fan fiction, and
stories from the Catgirl Extended Universe.

## Featured Book

### Harry Potter and the Serpent's Heart

What if Lucius Malfoy had a daughter instead of a son?

## Download Harry Potter and the Serpent's Heart

{% for file in site.static_files %}
  {% if file.path contains '/downloads/serpentsHeart/' %}
    {% assign ext = file.extname | downcase %}
    {% if ext == '.epub' or ext == '.pdf' %}
      <p>
        <a href="{{ file.path | relative_url }}">
          Download {{ ext | remove: '.' | upcase }}
        </a>
      </p>
    {% endif %}
  {% endif %}
{% endfor %}

[Read more about the book](books.html)
