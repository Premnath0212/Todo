const storeTask = require('./taskService.js');
// Unit-Test for SaveTask
describe('saveTask()', () => {
  it('saveTask must add task on existing list', () => {
    // Arrange
    const tasks = [
      {
        index: 1,
        description: 'one',
        isCompeleted: false,
      },
    ];
    const newTask = {
      index: 2,
      description: 'two',
      isCompeleted: true,
    };
    const expected = [
      {
        index: 1,
        description: 'one',
        isCompeleted: false,
      },
      {
        index: 2,
        description: 'two',
        isCompeleted: true,
      },
    ];
    // Act
    const output = storeTask.saveTask(newTask, tasks);
    // Assert
    expect(output).toStrictEqual(expected);
  });
  it('saveTask must start from inde one', () => {
    // Arrange
    const tasks = [];
    const newTask = {
      index: 2,
      description: 'two',
      isCompeleted: true,
    };
    const expected = [
      {
        index: 1,
        description: 'two',
        isCompeleted: true,
      },
    ];
    // Act
    const output = storeTask.saveTask(newTask, tasks);
    // Assert
    expect(output).toStrictEqual(expected);
  });
});
// Unit-Test for removeTask
describe('removeTask()', () => {
  it('removeTask must remove task on existing list', () => {
    // Arrange
    const tasks = [
      {
        index: 1,
        description: 'one',
        isCompeleted: false,
      },
      {
        index: 2,
        description: 'two',
        isCompeleted: true,
      },
    ];
    const tobeRemoved = {
      index: 2,
      description: 'two',
      isCompeleted: true,
    };
    const expected = [
      {
        index: 1,
        description: 'one',
        isCompeleted: false,
      },
    ];
    // Act
    const output = storeTask.removeTask(tobeRemoved.index, tasks);
    // Assert
    expect(output).toStrictEqual(expected);
  });
  it('removeTask must remove task on existing list and fix index number', () => {
    // Arrange
    const tasks = [
      {
        index: 1,
        description: 'one',
        isCompeleted: false,
      },
      {
        index: 2,
        description: 'two',
        isCompeleted: true,
      },
    ];
    const tobeRemoved = {
      index: 1,
      description: 'one',
      isCompeleted: false,
    };
    const expected = [
      {
        index: 1,
        description: 'two',
        isCompeleted: true,
      },
    ];
    // Act
    const output = storeTask.removeTask(tobeRemoved.index, tasks);
    // Assert
    expect(output).toStrictEqual(expected);
  });
});

// Unit-Test for compeletedTask
describe('removeCompeletedTask()', () => {
  it('removeCompeletedTask must remove tasks that are compeleted', () => {
    // Arrange
    const tasks = [
      {
        index: 1,
        description: 'one',
        isCompeleted: false,
      },
      {
        index: 2,
        description: 'two',
        isCompeleted: true,
      },
      {
        index: 3,
        description: 'three',
        isCompeleted: true,
      },
    ];

    const expected = [
      {
        index: 1,
        description: 'one',
        isCompeleted: false,
      },
    ];
    // Act
    const output = storeTask.removeCompeletedTask(tasks);
    // Assert
    expect(output).toStrictEqual(expected);
  });
  it('removeCompeletedTask must remove tasks that are compeleted and rearrange index number', () => {
    // Arrange
    const tasks = [
      {
        index: 1,
        description: 'one',
        isCompeleted: true,
      },
      {
        index: 2,
        description: 'two',
        isCompeleted: false,
      },
      {
        index: 3,
        description: 'three',
        isCompeleted: true,
      },
    ];
    const expected = [
      {
        index: 1,
        description: 'two',
        isCompeleted: false,
      },
    ];
    // Act
    const output = storeTask.removeCompeletedTask(tasks);
    // Assert
    expect(output).toStrictEqual(expected);
  });
});

// Unit-Test for update Compeleted Status
describe('updateStatus()', () => {
  it('updateStatus must update status to true', () => {
    // Arrange
    const tasks = [
      {
        index: 1,
        description: 'one',
        isCompeleted: false,
      },
      {
        index: 2,
        description: 'two',
        isCompeleted: false,
      },
    ];

    const expected = [
      {
        index: 1,
        description: 'one',
        isCompeleted: true,
      },
      {
        index: 2,
        description: 'two',
        isCompeleted: false,
      },
    ];
    // Act
    const output = storeTask.updateStatus(1, true, tasks);
    // Assert
    expect(output).toStrictEqual(expected);
  });
  it('updateStatus must update status to false', () => {
    // Arrange
    const tasks = [
      {
        index: 1,
        description: 'one',
        isCompeleted: true,
      },
      {
        index: 2,
        description: 'two',
        isCompeleted: false,
      },
    ];

    const expected = [
      {
        index: 1,
        description: 'one',
        isCompeleted: false,
      },
      {
        index: 2,
        description: 'two',
        isCompeleted: false,
      },
    ];
    // Act
    const output = storeTask.updateStatus(1, false, tasks);
    // Assert
    expect(output).toStrictEqual(expected);
  });
});

// Unit-Test for update Description
describe('updateDescription()', () => {
  it('updateDescription must update description', () => {
    // Arrange
    const tasks = [
      {
        index: 1,
        description: 'one',
        isCompeleted: true,
      },
      {
        index: 2,
        description: 'descriptions should not be updated',
        isCompeleted: false,
      },
    ];

    const expected = [
      {
        index: 1,
        description: 'description updated',
        isCompeleted: true,
      },
      {
        index: 2,
        description: 'descriptions should not be updated',
        isCompeleted: false,
      },
    ];
    // Act
    const output = storeTask.updateDescription(1, 'description updated', tasks);
    // Assert
    expect(output).toStrictEqual(expected);
  });
});