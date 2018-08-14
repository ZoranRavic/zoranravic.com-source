import {VElement} from "velements";
import {circle, path, svgRectPattern} from "svg-textures";

const apply = (selector: string, content: VElement) =>
{
    document.querySelector(selector).appendChild(content.toElement());
};

apply('.hero .bg-svg', svgRectPattern({
    content: circle({
        radius: 4,
        stroke: 'rgba(0,0,0,.13)',
        fill: 'transparent',
        strokeWidth: 1,
    })
}));

apply('.blue .bg-svg', svgRectPattern({
    content: path({
        path: 'woven',
        stroke: 'rgba(0,0,0,.13)',
        strokeWidth: 1,
    })
}));

apply('.green .bg-svg', svgRectPattern({
    size: 30,
    content: path({
        size: 30,
        path: 'nylon',
        stroke: 'rgba(0,0,0,.13)',
        fill: 'transparent',
        strokeWidth: 1,
        shapeRendering: 'crispEdges',
    })
}));

apply('.yellow .bg-svg', svgRectPattern({
    content: path({
        path: 'caps',
        stroke: 'rgba(0,0,0,.13)',
        fill: 'transparent',
        strokeWidth: 1,
    })
}));

apply('.purple .bg-svg', svgRectPattern({
    content: circle({
        radius: 1,
        fill: 'rgba(0,0,0,.25)',
        strokeWidth: 0,
    })
}));

apply('.pink .bg-svg', svgRectPattern({
    content: path({
        path: 'squares',
        stroke: 'rgba(0,0,0,.12)',
        fill: 'transparent',
        strokeWidth: 1,
    })
}));

apply('.dark .bg-svg', svgRectPattern({
    content: path({
        path: 'crosses',
        stroke: 'rgba(255,255,255,.13)',
        strokeWidth: 1,
    })
}));
