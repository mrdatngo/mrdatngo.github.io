const tryGridTemplateColumnsRows = () => {
  const gridColumns = document.getElementById('grid-template-columns');
  const gridRows = document.getElementById('grid-template-rows');

  const tryContainer = document.querySelector(
    '#try-grid-template-columns-rows .try-container'
  );
  tryContainer.style.gridTemplateColumns = gridColumns.value;
  tryContainer.style.gridTemplateRows = gridRows.value;
};
