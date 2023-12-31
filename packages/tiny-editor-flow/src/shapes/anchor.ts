import Konva from 'konva'
import { IAnchor, IShape } from '../types'

// type IAnchorPoint = Omit<IAnchor, 'anchor'> 

class Anchor {
  node: IShape
  bars: Konva.Shape[]

  constructor(node: IShape) {
    this.node = node
    this.bars = []
    this.createAnchor()
  }

  createAnchor() {
    this.node.anchors.forEach((anchor: IAnchor) => {
      const p = new Konva.Circle({
        x: anchor.x,
        y: anchor.y,
        radius: 3,
        fill: '#fff',
        stroke: 'rgb(0,181,237)',
        strokeWidth: 1
      })

      p.on('mouseover',() => {
        this.show()
        if (p.parent && p.parent.parent) {
          const stage = p.parent.parent as Konva.Stage
          stage.container().style.cursor = 'crosshair'
        }
      })

      p.on('mouseout',() => {
        this.hide()
        if (p.parent && p.parent.parent) {
          const stage = p.parent.parent as Konva.Stage
          stage.container().style.cursor = 'default'
        }
      })

      this.bars.push(p)
    })
  }

  show() {
    this.bars.forEach((bar: Konva.Shape) => {
      bar.show()
    })
  }

  hide() {
    this.bars.forEach((bar: Konva.Shape) => {
      bar.hide()
    }) 
  }

  refresh() {
    this.node.createAnchors()
    this.node.anchors.forEach((anchor: IAnchor, index: number) => {
      this.bars[index].setAttrs({
        x: anchor.x,
        y: anchor.y
      })
    })
  }
}

export default Anchor
