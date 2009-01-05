<p>This example uses a FunctionDataSource that performs string matching against different fields of a two-dimensional array at runtime, depending on whether the input is a letter or a number. Since the data for this example is already loaded into memory, queries should be quite fast to return data, but use of the custom function allows a more complex search algorithm. When the searched field is determined, the DataSource schema also needs to be updated on the fly. A custom formatter allows users to see both state and area code values for each result.</p>