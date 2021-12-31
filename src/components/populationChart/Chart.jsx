export default function Chart({ children, width, height }) {
    return(
        <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height}>
            {children}
        </svg>
    )
} 
  