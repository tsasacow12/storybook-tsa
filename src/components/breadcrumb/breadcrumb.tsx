import React from 'react';
import './breadcrumb.css';

type BreadcrumbProps = {
  variant: 'small' | 'medium' | 'large';
  datas: Array<{ label: string; url?: string }>;
};

const Breadcumb: React.FC<BreadcrumbProps> = ({ variant, datas }) => {
  return (
    <div className={`breadcrumb breadcrumb-${variant}`}>
      {datas.map((item, index) => (
        <span key={index} className="breadcrumb-item">
          {item.url ? (
            <a href={item.url} className="breadcrumb-link">
              {item.label}
            </a>
          ) : (
            <span>{item.label}</span>
          )}
          {index < datas.length - 1 && <span className="breadcrumb-separator"> &gt; </span>}
        </span>
      ))}
    </div>
  );
};

export default Breadcumb;