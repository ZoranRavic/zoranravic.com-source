
switch (location.pathname)
{
    case '/':
        require('./mainHome');
        break;
    case '/svg-textures':
    case '/svg-textures/':
        require('./mainSvgTextures');
        break;
}
