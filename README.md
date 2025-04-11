## Figma URL

[Strapi Submenus](https://www.figma.com/file/rXeU2gYTyKL2FrYmUNgv4r/Strapi-Submenus?node-id=0%3A1&t=Nx5H36ryj9ArZCI6-1)

### 3D Effect CSS

This site uses CSS to apply 3D transformations to some elements. Here's what each line does:

transform: rotateX(-90deg) translateX(-50%);
The transform property applies a transformation to an element. In this case, it applies two transformations: rotateX(-90deg) and translateX(-50%).

rotateX(-90deg) rotates the element around the X-axis by -90 degrees, which means it will appear to be flipped upside down.
translateX(-50%) moves the element horizontally by -50% of its own width, effectively shifting it to the left.
Together, these transformations make the element appear to be rotated and tilted, as if it's viewed from above and at an angle.

transform-origin: top;
The transform-origin property specifies the point around which the element should be rotated and transformed. In this case, it's set to top, which means the transformation should be applied around the top edge of the element.

perspective: 1000px;
The perspective property defines the distance between the viewer and the element, and affects the appearance of 3D transformations. In this case, it's set to 1000px, which means the element will appear to be tilted and rotated as if it's viewed from a distance of 1000 pixels.