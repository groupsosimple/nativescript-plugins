# @groupsosimple/nativescript-image-generator

```javascript
ns plugin add @groupsosimple/nativescript-image-generator
```

This is a direct fork of [nativescript-images-generator-hook](https://github.com/Creatiwity/nativescript-images-generator-hook).
It solves the issue that the build crashes when 'platforms' folder doesn't exist on 'tns run' and updates the dependencies.

Nativescript hook that generates App_Resources images based on a single high resolution image.

## Usage

Put all your 3x PNG images in `App_Resources/images`.

For instance, if you put `navbar_logo@3x.png` in this folder, it will be available as `res://navbar_logo`.
If you put an image without scale suffix, it will use it as a `x1` image. You can provide any integer scale from 1 to 5.

## License

Apache License Version 2.0
