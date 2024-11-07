import MermaidDiagram from "../MermaidDiagram/MermaidDiagram";



const Diagram = () => {
  const chart = `
   graph TD
    A[Клиент заходит на сайт] --> B[Просмотр информации о компании];
    B --> C[Просмотр проектов];
    C --> D[Заполнение формы заявки];
    D --> E[Отправка заявки];
    E --> F[Получение заявки компанией];
  `;

  return (
    <div>
      <h2>Диаграмма процесса</h2>
      <MermaidDiagram chart={chart} />
    </div>
  );
};

export default Diagram;

