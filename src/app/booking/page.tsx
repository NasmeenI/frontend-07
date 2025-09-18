"use client"

import type React from "react"
import { useState } from "react"
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Box,
  Typography,
  Container,
  Paper,
} from "@mui/material"
import DateReserve from "../../components/DateReserve"
import type { Dayjs } from "dayjs"

export default function BookingPage() {
  const [formData, setFormData] = useState({
    nameLast: "",
    contactNumber: "",
    venue: "",
  })
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null)

  const handleInputChange = (field: string) => (event: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: event.target.value,
    }))
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    console.log("Form submitted:", { ...formData, date: selectedDate })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
          Venue Booking
        </Typography>

        <Paper elevation={3} sx={{ p: 4 }}>
          <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <TextField
              name="Name-Lastname"
              label="Name-Lastname"
              variant="standard"
              fullWidth
              value={formData.nameLast}
              onChange={handleInputChange("nameLast")}
              required
            />

            <TextField
              name="Contact-Number"
              label="Contact-Number"
              variant="standard"
              fullWidth
              value={formData.contactNumber}
              onChange={handleInputChange("contactNumber")}
              required
            />

            <FormControl variant="standard" fullWidth required>
              <InputLabel id="venue-label">เลือกสถานที่</InputLabel>
              <Select
                labelId="venue-label"
                id="venue"
                value={formData.venue}
                onChange={handleInputChange("venue")}
                label="เลือกสถานที่"
              >
                <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
                <MenuItem value="Spark">Spark Space</MenuItem>
                <MenuItem value="GrandTable">The Grand Table</MenuItem>
              </Select>
            </FormControl>

            <DateReserve value={selectedDate} onChange={setSelectedDate} />

            <Button type="submit" name="Book Venue" variant="contained" size="large" sx={{ mt: 2, py: 1.5 }}>
              Book Venue
            </Button>
          </Box>
        </Paper>
      </Container>
    </div>
  )
}
