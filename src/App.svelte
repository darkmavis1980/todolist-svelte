<script lang="ts">
  import InputField from './lib/InputField.svelte';
  import TodoList from './lib/TodoList.svelte';
</script>

<main>
  <div class="container">
    <div class="todo">
      <InputField />
      <TodoList />
    </div>
  </div>
</main>

<style global>
 :root {
    --accent-color: LightSlateGray;
    --input-border: 2px solid var(--accent-color);
    --app-bg-color: white;
    --input-bg-color: var(--app-bg-color);
    --input-padding: 0.5rem;
  }

  body {
    background-color: whitesmoke;
    margin: 0;
    font-family: 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .container {
    padding: 1rem;
  }

  .todo {
    width: 400px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0 0 0 / .2);
    background-color: white;
  }
</style>
