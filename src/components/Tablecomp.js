import React, { useState, useEffect } from "react";
import { DataTable, Text, Chip, Button } from "react-native-paper";
import { View } from "react-native";
import axios from "axios";
const Tablecomp = ({ navigation }) => {
  const [tableData, setTableData] = useState();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await axios.get(
      "https://quikieapps-backend.herokuapp.com/api/table/"
    );
    setTableData(data);
  };
  return (
    <>
      <Text style={{ fontSize: 22, textAlign: "center", marginTop: 20 }}>
        Saved data table
      </Text>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Company Name</DataTable.Title>
          <DataTable.Title numeric>Symbol</DataTable.Title>
        </DataTable.Header>

        {tableData &&
          tableData.data.map((data) => {
            return (
              <DataTable.Row>
                <DataTable.Cell>{data.description}</DataTable.Cell>
                <DataTable.Cell numeric>
                  <Chip>
                    <Text style={{ fontWeight: "bold", color: "#4A4AFF" }}>
                      {data.displaySymbol}
                    </Text>
                  </Chip>
                </DataTable.Cell>
              </DataTable.Row>
            );
          })}
      </DataTable>

      <View style={{ flex: 1, alignItems: "center", marginTop: 20 }}>
        <Button
          onPress={() => navigation.goBack()}
          style={{
            width: "50%",
            backgroundColor: "#6D5BD0",
            height: 45,
            paddingVertical: 3,
          }}
          mode="contained"
        >
          Back
        </Button>

        <Button
          onPress={() => fetchData()}
          style={{
            width: "50%",
            backgroundColor: "#6D5BD0",
            height: 45,
            paddingVertical: 3,
            marginTop: 40,
          }}
          mode="contained"
        >
          Refresh Data
        </Button>
      </View>
    </>
  );
};

export default Tablecomp;
