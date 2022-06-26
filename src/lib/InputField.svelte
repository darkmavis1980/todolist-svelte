<script lang="ts">
  import { todoList } from './store';
  import type { IResponse } from './interfaces';
  import axiosInstance from './utils';

  let task = '';

  const addItem = async () => {
    const { data: { todo = [] }}: IResponse = await axiosInstance.post('/todo', { task });
    todoList.set(todo);
    task = '';
  }
</script>

<div class="input-field">
  <label for="task">Add task</label>
  <input type="text" id="task" bind:value={task} />
  <button type="button" on:click={addItem}>Add</button>
</div>

<style>
  .input-field {
    padding: 2rem;
    border-bottom: 1px solid rgba(0 0 0 / .2);
  }

  .input-field label {
    display: none;
  }

  .input-field input {
    font-size: 1rem;
    border: var(--input-border);
    padding: var(--input-padding);
    background-color: var(--input-bg-color);
    border-radius: 5px 0 0 5px;
  }

  .input-field button {
    font-size: 1rem;
    border: var(--input-border);
    border-left: none;
    background-color: var(--input-bg-color);
    padding: var(--input-padding);
    border-radius: 0 5px 5px 0;
  }
</style>
