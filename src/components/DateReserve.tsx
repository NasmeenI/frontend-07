"use client"

import type React from "react"
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import type { Dayjs } from "dayjs"

interface DateReserveProps {
  value: Dayjs | null
  onChange: (value: Dayjs | null) => void
}

export default function DateReserve({ value, onChange }: DateReserveProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="เลือกวันที่"
        value={value}
        onChange={onChange}
        slotProps={{
          textField: { fullWidth: true, variant: "standard", name: "Reserve-Date" },
        }}
      />
    </LocalizationProvider>
  )
}


