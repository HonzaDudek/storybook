import React from 'react';

import TaskList from "./TaskList";
import { taskData, actionsData} from "./Task.stories";

export default {
    component: TaskList,
    title: 'TaskList',
    decorators: [story => <div style={{padding: '3rem'}}>{story()}</div>],
    excludeStories: /.*Data$/,
}

export const defaultTaskListData = [
    {...taskData, id: 1, title: 'Task 1'},
    {...taskData, id: 2, title: 'Task 2'},
    {...taskData, id: 3, title: 'Task 3'},
    {...taskData, id: 4, title: 'Task 4'},
    {...taskData, id: 5, title: 'Task 5'},
];

export const withPinnedTasksData = [
    ...defaultTaskListData.slice(0,4),
    {id: 5, title: 'Task 6 (pinned)', state: 'TASK_PINNED'},
];

export const Default = () => {
    return (
        <TaskList tasks={defaultTaskListData} {...actionsData}/>
    ) ;
};
export const WithPinnedTasks = () => {
    return (
        <TaskList tasks={withPinnedTasksData} {...actionsData}/>
    );
};
export const Loading = () => {
    return (
        <TaskList tasks={[]} {...actionsData}/>
    );
};
export const Empty = () => {
    return (
        <TaskList tasks={[]} {...actionsData}/>
    );
};
