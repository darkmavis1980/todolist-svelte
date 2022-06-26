<script lang="ts">
  import { onMount } from 'svelte';
  import axiosInstance from './utils';
  import type { IResponse } from './interfaces';
  import { todoList } from './store';

  let todo = [];

  onMount(async () => {
    const { data: { todo = [] } }: IResponse = await axiosInstance.get('/todo');
    todoList.set(todo);
  });

  const deleteTask = async (item) => {
    const { data: { todo = [] } }: IResponse = await axiosInstance.delete(`/todo/${item}`);
    todoList.set(todo);
  }

  todoList.subscribe(value => {
    todo = value;
  });
</script>

<div class="list">
  <ul>
    {#if todo.length === 0}
      <li>Add something above!</li>
    {/if}
    {#if todo.length > 0}
      {#each todo as item, index}
        <li>
          <span>{item}</span>
          <button type="button" on:click={() => deleteTask(item)}>&#x2716;</button>
        </li>
      {/each}
    {/if}

  </ul>
</div>

<style>
  .list ul {
    margin: 0;
    padding: 0;
  }

  .list ul li {
    display: flex;
    flex: 1fr 20px;
    flex-direction: row;
    padding: 0.75rem 1rem;
    line-height: 2rem;
    border-bottom: 1px solid rgba(0 0 0 / .1);
  }

  .list ul li span {
    flex: 1;
  }

  .list ul li button {
    width: 26px;
    border: none;
    background-color: transparent;
    border-radius: 5px;
    font-weight: 600;
    height: 2rem;
    width: 2rem;
    background-color: whitesmoke;
  }

  .list ul li button:active {
    background-color: var(--accent-color);
    color: var(--app-bg-color);
  }
</style>