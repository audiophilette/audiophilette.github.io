---
layout: default
title: Books
---
<section class="introduction" markdown="1">
<img class="home-portrait" src="{{ '/assets/img/catgirl.png' | relative_url }}" alt="Sensurround Q. Catgirl">

# Plastic Skillet Publishing

*Stories that probably shouldn't exist, but do anyway.*

Welcome to the literary home of **Sensurround Q. Catgirl**, where
questionable creative decisions are made with great enthusiasm
and absolutely no regard for the consequences.

Here you'll find original fiction, fan fiction, and occasional
experiments in storytelling that probably seemed like much
better ideas when they first occurred to me.

[Meet the author]({{ '/about/' | relative_url }})

</section>
<section aria-labelledby="books-heading">
  <h2 id="books-heading" class="section-heading">The books</h2>
  <div class="book-list">
    {% assign books = site.tabs | where: 'layout', 'book' | sort: 'order' %}
    {% for book in books %}
    <article class="book-card">
      <a class="cover-link" href="{{ book.url | relative_url }}" tabindex="-1" aria-hidden="true"><img src="{{ book.cover | relative_url }}" alt="" width="360" height="480"></a>
      <div>
        <p class="eyebrow">{{ book.category }}</p>
        <h3><a href="{{ book.url | relative_url }}">{{ book.title }}</a></h3>
        {% if book.summary %}<p>{{ book.summary }}</p>{% endif %}
        <a class="book-link" href="{{ book.url | relative_url }}">Details &amp; downloads <span aria-hidden="true">→</span><span class="sr-only"> for {{ book.title }}</span></a>
      </div>
    </article>
    {% endfor %}
  </div>
</section>
