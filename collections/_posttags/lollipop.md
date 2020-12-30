---
layout: tag
tag-name: lollipop
---
{% for post in site.posts %}
{% if post.tags contains page.tag-name %}
{% include result.html %}
{% endif %}
{% endfor %}
