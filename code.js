function depthFirstSearch(graph, startNode, targetNode, visitedNodes, path) {
    if(startNode == targetNode)
    {
        return true
    }
    for(i = 0; i < graph[startNode].length; console.log(i++))
    {
        if(graph[startNode][i] && visitedNodes[graph[startNode][i]] != true)
        {
            visitedNodes[graph[startNode][i]] = true
            path.push(graph[startNode][i])
            deadEnd = depthFirstSearch(graph, graph[startNode][i], targetNode, visitedNodes, path)
            if(deadEnd)
            {
                return deadEnd
            }
        } else
        {
            path.pop()
        }
    }
    console.log(false)
    return false
}


g = [[1,2],[1],[0,1]]
target = 2
start = 0
visitedNodes = []
path = [start]
depthFirstSearch(g, start, target, visitedNodes, path)
console.log(path)