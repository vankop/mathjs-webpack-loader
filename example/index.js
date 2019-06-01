import expressions from './myawesomeexpressions.mathjs';
import mathjs from 'mathjs';

const vars = {x: 1, y: 20};

expressions(mathjs).forEach(exp => console.log(exp.compile().eval(vars)));
