import React from "react";
import { DataTable, Text, Chip, Button } from "react-native-paper";
import { View } from "react-native";
const Tablecomp = () => {
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

        <DataTable.Row>
          <DataTable.Cell>141 Capital Inc</DataTable.Cell>
          <DataTable.Cell numeric>
            <Chip>
              <Text style={{ fontWeight: "bold", color: "#4A4AFF" }}>ONCP</Text>
            </Chip>
          </DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>BigString Corp</DataTable.Cell>
          <DataTable.Cell numeric>
            <Chip>
              <Text style={{ fontWeight: "bold", color: "#4A4AFF" }}>BSGC</Text>
            </Chip>
          </DataTable.Cell>
        </DataTable.Row>
      </DataTable>
    </>
  );
};

export default Tablecomp;
