# jQuery LateLoad plugin

This plugin will automatically load remote content into containing elements based on
attributes.

## Usage

HTML:

    <div class="lateload" data-src="/path/too/content"></div>

JavaScript:

    $(function(){
      $('.lateload').lateLoad();
    });

## Attributes

- **data-src**: The remote URL to load content from