function depthFirstSearch(graph, startNode, targetNode, path = [], visitedNodes = []) {
    // If startNode is the node we were looking for, return path with node appended
    if(startNode == targetNode)
    {
        path.push(startNode)
        return path
    }
    // Mark startNode as visited
    visitedNodes[startNode] = true
    // For each edge, recursively process unless visited
    for(let i = 0; i < graph[startNode].length; i++)
    {
        if(visitedNodes[graph[startNode][i]] != true)
        {
            path.push(startNode)
            depthFirstSearch(graph, graph[startNode][i], targetNode, path, visitedNodes)
            if(path[path.length-1] == targetNode)
            {
                return path
            } else
            {
                if(path[0] == startNode)
                {
                    s = "No path between those nodes was found."
                    return s
                }
                path.pop()
            }
        }
    }
}


//g = [[1,2],[1],[0,1]]

// Generated this to run tests with using ChatGPT, because it sounded like a 
//pain to make a decent graph to run unit tests on
const g2 = [
    [1, 3, 7],   // Node 0 is connected to nodes 1, 3, and 7
    [0, 2, 4],   // Node 1 is connected to nodes 0, 2, and 4
    [1, 5],      // Node 2 is connected to nodes 1 and 5
    [0, 6],      // Node 3 is connected to nodes 0 and 6
    [1, 7],      // Node 4 is connected to nodes 1 and 7
    [2],         // Node 5 is connected to node 2
    [3, 8],      // Node 6 is connected to nodes 3 and 8
    [0, 4, 9],   // Node 7 is connected to nodes 0, 4, and 9
    [6],         // Node 8 is connected to node 6
    [7]          // Node 9 is connected to node 7
  ];
  
  // The above graph has 10 nodes and various paths you can test with.
  
//console.log(depthFirstSearch(g2, 0, 9))