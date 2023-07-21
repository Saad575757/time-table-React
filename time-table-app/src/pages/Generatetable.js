import React, { useState } from 'react';
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import './Teacherdashboard.css'
import Header from './Header';

const Generatetable = () => {
    const [department, setDepartment] = useState('');
    const [semester, setSemester] = useState('');
    const [timeTableData, setTimeTableData] = useState(null);
  
    const handleDepartmentChange = (event) => {
      setDepartment(event.target.value);
    };
  
    const handleSemesterChange = (event) => {
      setSemester(event.target.value);
    };
  
    const fetchTimeTableData = () => {
      // Fetch time table data based on department and semester
      // Update the timeTableData state variable with the fetched data
    };
  
    const generatePDF = () => {
      const timeTablePDF = (
        <Document>
          <Page style={styles.page}>
            <View style={styles.container}>
              <Text style={styles.heading}>Time Table</Text>
              {/* Render the time table data here */}
            </View>
          </Page>
        </Document>
      );
  
      return timeTablePDF;
    };
  
    return (
      <>
      <Header />
      <div className="time-table-container">
        <div className="select-container">
          <label>
            Department:
            <select
              className="select-dropdown"
              value={department}
              onChange={handleDepartmentChange}
            >
              <option value="department1">Department 1</option>
              <option value="department2">Department 2</option>
              {/* Add options for other departments */}
            </select>
          </label>
  
          <label>
            Semester:
            <select
              className="select-dropdown"
              value={semester}
              onChange={handleSemesterChange}
            >
              <option value="semester1">Semester 1</option>
              <option value="semester2">Semester 2</option>
              {/* Add options for other semesters */}
            </select>
          </label>
  
          <button className="generate-button" onClick={fetchTimeTableData}>
            Generate Time Table
          </button>
  
          {timeTableData && (
            <PDFDownloadLink
              document={generatePDF()}
              fileName="time_table.pdf"
              className="download-button"
            >
              Download PDF
            </PDFDownloadLink>
          )}
        </div>
  
        {timeTableData && (
          <table className="time-table">
            <thead>
              <tr>
                <th>Time</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
              </tr>
            </thead>
            <tbody>
              {/* Render the time table data here */}
            </tbody>
          </table>
        )}
      </div>
      </>
    );
};
const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#fff',
    },
    container: {
      flex: 1,
      padding: 30,
      fontFamily: 'Helvetica',
    },
    heading: {
      fontSize: 20,
      marginBottom: 30,
      textAlign: 'center',
    },
  });

export default Generatetable;
