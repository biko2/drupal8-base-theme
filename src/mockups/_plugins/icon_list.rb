module Jekyll
  class IconListTag < Liquid::Tag

    def initialize(tag_name, text, tokens)
      super
      @text = text
    end

    def render(context)
      root = context.registers[:site].source
      icon_name = @text.strip
      svg_filename = "#{icon_name}.svg"
      img_dir = File.expand_path(File.join(root, "../../dist/icons"))
      icons = []
      Dir.glob(img_dir + '/*.svg') do |svg_file|
        icon_name = File.basename svg_file, ".svg"
        svg = File.read(svg_file)
        icons.push "<span class=\"icon icon--#{icon_name}\">#{svg}</span>"
      end
      icons
    end
  end
end

Liquid::Template.register_tag('icon_list', Jekyll::IconListTag)
