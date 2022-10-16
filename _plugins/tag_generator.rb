Jekyll::Hooks.register :posts, :post_write do |post|
  all_existing_tags = Dir.entries("collections/_posttags")
    .map { |t| t.match(/(.*).md/) }
    .compact.map { |m| m[1] }

  tags = post['tags'].reject { |t| t.empty? }
  tags.each do |tag|
    generate_tag_file(tag) if !all_existing_tags.include?(tag)
  end
end

def generate_tag_file(tag)
  File.open("collections/_posttags/#{tag}.md", "wb") do |file|
    file << "---\nlayout: tag\ntag-name: #{tag}\n---\n{% for post in site.posts %}\n{% if post.tags contains page.tag-name %}\n{% include result.html %}\n{% endif %}\n{% endfor %}\n"
  end
end
