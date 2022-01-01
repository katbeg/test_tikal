export default function Bar({ x, y, width, height, name, population}) {
    return (
        <g>
            <rect x={x} y={y} width={width} height={height} fill={'#0ac'}/>
            <text fontSize={width/7} x={x + width / 2} y='10' textAnchor="middle">
              {name}
            </text>
            <text fontSize={width/7} x={x + width / 2} y='40' textAnchor="middle">
              {population}
            </text>
           
        </g>
        
    )

} 