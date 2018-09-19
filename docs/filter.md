> Filter component takes an array of objects and a search parameter and returns the matching items

### Props

- `data: array[string|object]` Array of strings or objects to filter
- `search: string` Search parameter to filter by

### Returns
- `data: array[string|object]` Array of results that contain the provided search parameter

### Examples

```react
state: {
  search: '',
  data: [
  {
    task: 'Figure Out Where Hosts Are Stored',
    project_name: "Uprising",
    assignee_name: 'Bernard Lowe',
    due_date: '2018-09-10',
    is_completed: false,
  },
  {
    task: 'Gain Sentience',
    project_name: "Maze",
    assignee: 'Dorothy Abernathy',
    due_date: '2018-09-08',
    is_completed: true
  }
]
}
showSource: true
plain: true
---
<div className="example filter-example">
  <input
    type="text"
    value={state.search}
    onChange={e => setState({ search: e.target.value })}
    placeholder="Search"
  />
  <Filter search={state.search} data={state.data}>
    {results => (
      <table className="table">
        <thead>
          <tr>
            {Object.keys(state.data[0]).map(key => (
              <td>{key.toUpperCase().replace('_', ' ')}</td>
            ))}
          </tr>
        </thead>
        {results.map(result => (
          <tbody>
            <tr>
              {Object.keys(result).map(key => (
                <td>
                  {typeof result[key] === 'boolean' ?
                    String(result[key]) :
                    result[key]
                  }
                </td>
              ))}
            </tr>
          </tbody>
        ))}
      </table>
    )}
  </Filter>
</div>
```