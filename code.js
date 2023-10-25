function depthFirstSearch(graph, startNode, targetNode, visitedNodes = [], path = [], edges = []) {
    path.push(startNode)
    // Base case: If current node is the target, return true with start node appended to path.
    if(startNode == targetNode)
    {
        return true
    }
    // Otherwise, pick an edge and follow it until you reach a node with no unvisited nodes.
    // Then, return false and remove node from path, and go back and pick a different edge to
    // search through
    for(i = graph[startNode].length-1; i >= 0; i--)
    {
        edges.push(graph[startNode][i])
    }
    temp = edges.pop()
    if(visitedNodes[temp] != true)
    {
        visitedNodes[temp] = true
        path.push(temp)
        test = depthFirstSearch(graph, graph[startNode][temp], targetNode, visitedNodes, path)
        if(test)
        {
            return true
        }
        else
        {
            path.pop()
        }
    }

    /*for(i = 0; i < graph[startNode].length; i++)
    {
        if(visitedNodes[graph[startNode][i]] != true)
        {
            visitedNodes[graph[startNode][i]] = true
            temp = i
            test = depthFirstSearch(graph, graph[startNode][temp], targetNode, visitedNodes, path)
            if(test)
            {
                return true
            } else
            {
                path.pop()
            }   
        }
    }*/





    /*if(startNode == targetNode)
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
    return false*/
}


g = [[1,2],[1],[0,1]]
target = 3
start = 0
visitedNodes = []
path = []
depthFirstSearch(g, start, target, visitedNodes, path)
console.log(path)