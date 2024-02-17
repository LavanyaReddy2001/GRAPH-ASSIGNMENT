	let V;

	let adj=new Array(1001);
	for(let i=0;i<adj.length;i++)
	{
		adj[i]=[];
	}
	
	function addEdge(v,w)
	{
	adj[v].push(w);
	adj[w].push(v);
	}
	
	function BFS(s,l)
	{
		V=100;
	let visited = new Array(V);
	let level = new Array(V);

	for (let i = 0; i < V; i++)
	{
	visited[i] = false;
	level[i] = 0;
	}

	let queue = [];
	visited[s] = true;
	queue.push(s);
	level[s] = 0;
	let count = 0;
	while (queue.length!=0)
	{
	s = queue[0];
	queue.shift();

	let list = adj[s];
	for (let i=0;i<list.length;i++)
	{
		if (!visited[list[i]])
		{
		visited[list[i]] = true;
		level[list[i]] = level[s] + 1;
		queue.push(list[i]);
		}
	}

	count = 0;
	for (let i = 0; i < V; i++)
		if (level[i] == l)
		count++;
	}
	return count;
}

addEdge(0, 1)
addEdge(0, 2)
addEdge(1, 3)
addEdge(2, 4)
addEdge(2, 5)

let level = 2;
document.write(BFS(0, level));
	
	

