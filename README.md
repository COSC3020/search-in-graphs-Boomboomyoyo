[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12472910&assignment_repo_type=AssignmentRepo)
# Search in Graphs

Recall the pseudocode for Depth-First Search:

Given a graph, a start node, and a node we're looking for:
- starting at the start node, while unvisited nodes remain
    - if current vertex $v$ is the node we're looking for, return it
    - mark $v$ as visited
    - for each edge $(v,w)$
        - recursively process $w$ unless marked visited

Implement the algorithm. You can choose any of the data structures we covered
(adjacency matrix or adjacency list) for the implementation. Your function
should return the list of nodes on the path from the source to the target (not
the list of nodes that you looked at during the search). Start with the template
I provided in `code.js` and test your new function. I have not provided any test
code, but you can base yours on test code from other exercises.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

## Bonus

Implement and analyze breadth-first search.

# Response

This exercise was a tough one for me, mostly because of an issue I had with using recursion within for loops. The loop variable would persist in scope through recursive layers, causing all kinds of odd behavior. Thankfully, Cade figured out a solution to that problem for me. I did rebuild

## References

A helpful stackoverflow post Ali found for me
https://stackoverflow.com/questions/54223966/recursion-how-do-i-keep-a-changing-variable-in-a-for-loop-from-changing-during

Used ChatGPT only to generate a connected graph of 10 nodes to play around with unit tests in. I didn't want to use my brainpower on that instead of the algorithm.

Cade helped me with my recursion in a for loop by figuring out how to prevent the index counter persist in scope through recursive layers. I can just use the keyword let to accomplish this.