import React, { PureComponent, createRef } from 'react';
import { MathJaxContext } from './MathJax';

enum TexDisplayKind {
    Inline,
    Display,
    DisplayStyle
}

interface TexProps {
    tex: string,
    displayType: TexDisplayKind
}

export class Tex extends PureComponent<TexProps, {}> {
    static DOM_CLASS = "math"

    static defaultProps = {
        displayType: TexDisplayKind.DisplayStyle
    }

    private jax = new MathJaxContext()

    private spanRef = createRef<HTMLElement>()

    render() {
        return <span className={Tex.DOM_CLASS} ref={this.spanRef} />
    }

    private loadTex() {
        const element = this.spanRef.current
        if(element == null) return
        this.jax.use ((mathJax) => {
            mathJax.typesetClear([element])
            let text = ""
            text += this.props.displayType === TexDisplayKind.Display ? "\\[" : "\\("
            if(this.props.displayType === TexDisplayKind.DisplayStyle) text += "\\displaystyle "
            text += this.props.tex
            text += this.props.displayType === TexDisplayKind.Display ? "\\]" : "\\)"
            element.innerHTML = ""
            element.appendChild(document.createTextNode(text))
            mathJax.typeset([element])
        })
    }

    componentDidMount() { this.loadTex() }
    componentDidUpdate() { this.loadTex() } 
    componentWillUnmount() {
        const element = this.spanRef.current
        if(element == null) return
        this.jax.use ((mathJax) => {
            mathJax.typesetClear([element])
        })
    }
}

export default Tex