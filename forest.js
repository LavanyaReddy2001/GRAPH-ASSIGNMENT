var adj; 
function Graph( v) 
{ 
	V = v; 
	adj = Array.from(Array(v), ()=>Array());
} 
function addEdge(v, w) 
{ 
	adj[v].push(w); 
} 
function DFSUtil(v, visited) 
{ 
	visited[v] = true; 
		for(var i of adj[v]) 
	{ 
		var n = i; 
		if (!visited[n])
		{
			DFSUtil(n, visited); 
		}
	}
} 
function countTrees()
{ 
	var visited = Array(V).fill(false); 
	var res = 0;
	
	for(var i = 0; i < V; ++i) 
	{
		if (visited[i] == false)
		{ 
			DFSUtil(i, visited); 
			res ++;
		}
	}
	return res;
} 


Graph(5); 
addEdge(0, 1); 
addEdge(0, 2); 
addEdge(3, 4); 
document.write(countTrees()); 

