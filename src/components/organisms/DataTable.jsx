import clsx from 'clsx';
import React from 'react'
import Button from '../atoms/Button'

export default function DataTable(props) {

  const {
    data,
    columns,
    onEdit,
    onDelete
  } = props;

  if (!Array.isArray(data)) {
    return <p>No hay datos para mostrar.</p>;
  }
  return (
    <table className='table'>
      <thead>
        <tr>
          {columns.map( (col,index) => (
            <th key={index} scope='col'>{col.header}</th>
          ))}
          {(onEdit || onDelete) && <th scope='col'>Acciones</th>}
        </tr>
      </thead>
      <tbody>
        {data.lenght === 0 ? (
          <tr>
            <td colSpan={columns.length + (onEdit || onDelete ? 1 : 0)}>
              No hay registros disponibles
            </td>
          </tr>
        ) : (
          data.map((item) => (
            <tr key={item.id}>
              {columns.map((col,index) => (
                <td 
                  key={index} 
                  className={col.className}
                >
                  {col.render ? col.render(item) : item[col.accessor]}
                </td>
              ))}
              {(onEdit && onDelete) && (
                <td>
                  <div className='row-action-buttons'>
                    {onEdit && <Button onClick={()=>onEdit(item)} text ="Editar"/>}
                    {onDelete && <Button onClick={()=>onDelete(item)} text ="Eliminar"/>}
                  </div>
                </td>
              )}
            </tr>
          ))
        )}
      </tbody>
    </table>
  )
}
