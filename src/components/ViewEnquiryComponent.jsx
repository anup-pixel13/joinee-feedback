import React, { useState, useEffect } from 'react';
import { listContact } from '../services/ContactService';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import * as XLSX from 'xlsx';
import '../component_css/ViewEnquiryComponent.css';

function ViewEnquiryComponent() {
  const { isAuthenticated } = useAuth();
  const [contact_datas, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const navigator = useNavigate();

  function getAllContacts() {
    listContact()
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    if (isAuthenticated) {
      getAllContacts();
    }
  }, [isAuthenticated]);

  // Prevent back button after logout
  useEffect(() => {
    const preventBack = () => {
      if (!isAuthenticated) {
        window.history.forward();
      }
    };

    window.addEventListener('popstate', preventBack);

    return () => {
      window.removeEventListener('popstate', preventBack);
    };
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return null;
  }

  function viewContact(cid) {
    navigator(`/enquiry_details/${cid}`);
  }

  // Excel Export Function - Export All Data
  const exportToExcel = () => {
    // Prepare data for Excel
    const excelData = contact_datas.map((contact) => ({
      'ID': contact.cid,
      'Name': contact.name,
      'Email': contact.email,
      'Phone Number': contact.phoneNumber,
      'Message': contact.message,
      'Created At': contact.createdAt
    }));

    // Create worksheet
    const worksheet = XLSX.utils.json_to_sheet(excelData);

    // Set column widths
    const columnWidths = [
      { wch: 5 },  // ID
      { wch: 20 }, // Name
      { wch: 30 }, // Email
      { wch: 15 }, // Phone Number
      { wch: 50 }, // Message
      { wch: 20 }  // Created At
    ];
    worksheet['!cols'] = columnWidths;

    // Create workbook
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Contact Enquiries');

    // Generate file name with current date
    const date = new Date();
    const fileName = `Contact_Enquiries_${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}.xlsx`;

    // Download file
    XLSX.writeFile(workbook, fileName);
  };

  // Export current page only
  const exportCurrentPageToExcel = () => {
    const excelData = currentItems.map((contact) => ({
      'ID': contact.cid,
      'Name': contact.name,
      'Email': contact.email,
      'Phone Number': contact.phoneNumber,
      'Message': contact.message,
      'Created At': contact.createdAt
    }));

    const worksheet = XLSX.utils.json_to_sheet(excelData);
    
    const columnWidths = [
      { wch: 5 }, { wch: 20 }, { wch: 30 }, { wch: 15 }, { wch: 50 }, { wch: 20 }
    ];
    worksheet['!cols'] = columnWidths;

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, `Page ${currentPage}`);

    const date = new Date();
    const fileName = `Contact_Enquiries_Page_${currentPage}_${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}.xlsx`;

    XLSX.writeFile(workbook, fileName);
  };

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = contact_datas.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(contact_datas.length / itemsPerPage);

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Go to next page
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Go to previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1);
        pageNumbers.push('...');
        pageNumbers.push(currentPage - 1);
        pageNumbers.push(currentPage);
        pageNumbers.push(currentPage + 1);
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      }
    }

    return pageNumbers;
  };

  return (
    <div className="container enquiry-container">
      {/* Header with Title and Export Buttons */}
      <div className="header-section">
        <h2 className="text-primary text-center enquiry-title">Contact Enquiries</h2>
        
        <div className="export-buttons">
          <button 
            className="btn-export btn-export-all" 
            onClick={exportToExcel}
            disabled={contact_datas.length === 0}
            title="Download all contact enquiries"
          >
            <i className="fas fa-file-excel me-2"></i>
            Export All to Excel
          </button>
          <button 
            className="btn-export btn-export-page" 
            onClick={exportCurrentPageToExcel}
            disabled={currentItems.length === 0}
            title="Download current page only"
          >
            <i className="fas fa-file-download me-2"></i>
            Export Page {currentPage}
          </button>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="stats-bar">
        <div className="items-per-page-selector">
          <label htmlFor="itemsPerPage">Items per page:</label>
          <select
            id="itemsPerPage"
            value={itemsPerPage}
            onChange={(e) => {
              setItemsPerPage(Number(e.target.value));
              setCurrentPage(1); // Reset to first page
            }}
            className="form-select"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
        </div>
        <div className="stat-item">
          <i className="fas fa-envelope"></i>
          <span>Total: <strong>{contact_datas.length}</strong></span>
        </div>
        <div className="stat-item">
          <i className="fas fa-file-alt"></i>
          <span>Page: <strong>{currentPage}</strong> of <strong>{totalPages}</strong></span>
        </div>
        <div className="stat-item">
          <i className="fas fa-list"></i>
          <span>Showing: <strong>{indexOfFirstItem + 1}</strong> - <strong>{Math.min(indexOfLastItem, contact_datas.length)}</strong></span>
        </div>
      </div>

      {/* Desktop Table View */}
      <div className="table-responsive desktop-view">
        <table className="table table-striped table-bordered enquiry-table">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Message Preview</th>
              <th>Created At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((contact) => (
              <tr key={contact.cid}>
                <td data-label="ID">{contact.cid}</td>
                <td data-label="Name">{contact.name}</td>
                <td data-label="Email">{contact.email}</td>
                <td data-label="Phone Number">{contact.phoneNumber}</td>
                <td data-label="Message Preview">
                  {contact.message.length > 50 
                    ? contact.message.substring(0, 50) + '...' 
                    : contact.message}
                </td>
                <td data-label="Created At">{contact.createdAt}</td>
                <td data-label="Actions">
                  <button
                    className="btn btn-info btn-sm"
                    onClick={() => viewContact(contact.cid)}
                  >
                    <i className="fas fa-eye me-1"></i>
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="mobile-view">
        {currentItems.map((contact) => (
          <div className="enquiry-card" key={contact.cid}>
            <div className="card-header">
              <span className="card-id">ID: {contact.cid}</span>
            </div>
            <div className="card-body">
              <div className="card-row">
                <span className="card-label">Name:</span>
                <span className="card-value">{contact.name}</span>
              </div>
              <div className="card-row">
                <span className="card-label">Email:</span>
                <span className="card-value">{contact.email}</span>
              </div>
              <div className="card-row">
                <span className="card-label">Phone:</span>
                <span className="card-value">{contact.phoneNumber}</span>
              </div>
              <div className="card-row">
                <span className="card-label">Message:</span>
                <span className="card-value message-preview">
                  {contact.message.length > 100 
                    ? contact.message.substring(0, 100) + '...' 
                    : contact.message}
                </span>
              </div>
              <div className="card-row">
                <span className="card-label">Created at:</span>
                <span className="card-value">{contact.createdAt}</span>
              </div>
            </div>
            <div className="card-footer">
              <button
                className="btn btn-info btn-block"
                onClick={() => viewContact(contact.cid)}
              >
                <i className="fas fa-eye me-2"></i>
                View Full Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="pagination-wrapper">
          <nav aria-label="Contact enquiry pagination">
            <ul className="pagination justify-content-center">
              {/* Previous Button */}
              <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <button
                  className="page-link"
                  onClick={prevPage}
                  disabled={currentPage === 1}
                  aria-label="Previous"
                >
                  <i className="fas fa-chevron-left"></i>
                  <span className="d-none d-sm-inline ms-1">Previous</span>
                </button>
              </li>

              {/* Page Numbers */}
              {getPageNumbers().map((number, index) => (
                <li
                  key={index}
                  className={`page-item ${number === currentPage ? 'active' : ''} ${number === '...' ? 'disabled' : ''}`}
                >
                  {number === '...' ? (
                    <span className="page-link">...</span>
                  ) : (
                    <button
                      className="page-link"
                      onClick={() => paginate(number)}
                    >
                      {number}
                    </button>
                  )}
                </li>
              ))}

              {/* Next Button */}
              <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                <button
                  className="page-link"
                  onClick={nextPage}
                  disabled={currentPage === totalPages}
                  aria-label="Next"
                >
                  <span className="d-none d-sm-inline me-1">Next</span>
                  <i className="fas fa-chevron-right"></i>
                </button>
              </li>
            </ul>
          </nav>

          {/* Items per page info */}
          <div className="pagination-info">
            <span>Showing {indexOfFirstItem + 1} - {Math.min(indexOfLastItem, contact_datas.length)} of {contact_datas.length} entries</span>
          </div>
        </div>
      )}

      {/* Empty State */}
      {contact_datas.length === 0 && (
        <div className="empty-state">
          <i className="fas fa-inbox fa-3x mb-3 text-muted"></i>
          <p className="text-muted">No contact enquiries available</p>
        </div>
      )}
    </div>
  );
}

export default ViewEnquiryComponent;