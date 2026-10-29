## Downloads

{% assign download_count = 0 %}
{% for file in site.static_files %}
  {% if file.path contains '/downloads/serpentsHeart/' %}
    {% assign ext = file.extname | downcase %}
    {% if ext == '.epub' or ext == '.pdf' or ext == '.md' %}
      {% assign download_count = download_count | plus: 1 %}
- [{{ file.name }}]({{ file.path | relative_url }})
    {% endif %}
  {% endif %}
{% endfor %}

{% if download_count == 0 %}
No downloads found.
{% endif %}
