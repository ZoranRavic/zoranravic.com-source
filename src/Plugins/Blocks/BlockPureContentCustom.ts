import {Block} from "zox/lib/Plugins/PluginManagers/BlockPluginManager";
import {BlockContent} from "zox/lib/Plugins/Blocks/BlockContent";

@Block({
    name: 'pure-content-custom'
})
export class BlockPureContentCustom extends BlockContent
{
    constructor(block: string, content, settings?)
    {
        super(block, content, settings);
        switch (content.url)
        {
            case 'svg-textures': handleSvgTextures(content); break;
        }
    }
}

type SvgTexturesContent = {
    type: string
    sections: Array<{
        title: string
        examples: SvgTexturesExample[]
        examplesSplit: SvgTexturesExample[][]
    }>
}

type SvgTexturesExample = {
    class: string
    code: string
}

const handleSvgTextures = (content: SvgTexturesContent) =>
{
    if (content && content.sections)
    {
        for (const section of content.sections)
        {
            if (!section.examplesSplit && Array.isArray(section.examples))
            {
                const data: SvgTexturesExample[][] = [[], [], []];
                for (let i = 0; i < section.examples.length; ++i)
                {
                    data[i % 3].push(section.examples[i] as SvgTexturesExample);
                }
                section.examplesSplit = data;
            }
        }
    }
};
