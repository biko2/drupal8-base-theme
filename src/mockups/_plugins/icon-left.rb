module Jekyll
  class IconLeftTag < Liquid::Tag

    def initialize(tag_name, text, tokens)
      super
      @text = text
    end

    def render(context)
      @root = context.registers[:site].source
      @icon_name = @text.strip
      @svg_filename = "#{@icon_name}.svg"
      @img_dir = File.expand_path(File.join(@root, "../../dist/icons"))
      @svg_file = File.join(@img_dir, @svg_filename)
      @svg = File.read(@svg_file)
      "<span class=\"icon icon--left icon--#{@icon_name}\">#{@svg}</span>"
    end
  end
end

Liquid::Template.register_tag('icon_left', Jekyll::IconLeftTag)
