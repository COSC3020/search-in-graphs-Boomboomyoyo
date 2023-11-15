const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

const test =
    jsc.forall("nat", function(int) {

        // Create a connected graph of v nodes.
        nodeCount = Math.max(int,1)
        var graph = connectedGraph(nodeCount)
        // Choose a random node in the graph to find a path to
        targetNode = Math.floor(Math.random()*(nodeCount))
        path = depthFirstSearch(graph, 0, targetNode)
        if(path == "No path between those nodes was found.")
        {
            console.log(path)
            return true
        }
        return isValidPath(graph, 0, targetNode, path)
    });
jsc.assert(test, { tests: 1000 });

function isValidPath(graph, startNode, targetNode, path)
{
    if(startNode == targetNode)
    {
        return true
    }
    nextNodeFound = false
    for(n = 0; n < path.length; n++)
    {
        if(path[n] == targetNode)
        {
            return true
        }
        for(i = 0; (graph[path[n]][i] != undefined) && !nextNodeFound; i++)
        {
            if(graph[path[n]][i] == path[n+1])
            {
                nextNodeFound = true
            }
        }
        if(nextNodeFound)
        {
            nextNodeFound = false
        } else
        {
            return false
        }
    }
}

function connectedGraph(v)
{
    graph = []
    for(i=0; i < v; i++)
    {
        graph.push([])
    }
    edges = Math.max(Math.floor(v*(Math.random()*(v))),v-1)
    return connectedGraph2(v, edges, graph)
}

function connectedGraph2(v, e, graph, connectedNodes = [0])
{
    while(e > v-connectedNodes.length)
    {
        n1 = randomElementRange(connectedNodes.length)
        n1 = connectedNodes[n1]
        n2 = randomElementRange(v)
        if(!graph[n1].includes(n2))
        {
            graph[n1].push(n2)
            if(!connectedNodes.includes(n2))
            {
                connectedNodes.push(n2)
            }
            return connectedGraph2(v, e-1, graph, connectedNodes)
        }
    }
    if(edges > 0)
    {
        for(i = 0; i < v; i++)
        {
            if(!connectedNodes.includes(i))
            {
                n1 = Math.max(Math.floor(Math.random()*(connectedNodes.length))-1,0)
                n1 = connectedNodes[n1]
                graph[n1].push(i)
                edges -= 1
            }
        }
    }
    return graph
}

function randomElementRange(n) 
{
    return Math.floor(Math.random()*n)
}