import Circle from './circle';
import type { NodeType, IShapeConfig } from '../types';
import TinyFlowEditor from '../tinyFlowEditor';

// interface IShapes {
//   circle: Circle
// }

const shapes = {
  circle: Circle
}

export class Shape {
  // private nodeType: NodeType
  private editor: TinyFlowEditor

  constructor(editor: TinyFlowEditor) {
    // this.nodeType = nodeType;
    this.editor = editor;
    

  }

  getShape(nodeType: NodeType, config: IShapeConfig) {
    return new shapes[nodeType](this.editor, config)
  }
}
