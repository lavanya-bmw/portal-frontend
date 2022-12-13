/********************************************************************************
 * Copyright (c) 2021,2022 BMW Group AG
 * Copyright (c) 2021,2022 Contributors to the Eclipse Foundation
 *
 * See the NOTICE file(s) distributed with this work for additional
 * information regarding copyright ownership.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Apache License, Version 2.0 which is available at
 * https://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 ********************************************************************************/

import { Box } from '@mui/material'
import { useState } from 'react'
import { Typography } from '../../Typography'
import UploadFileIcon from '@mui/icons-material/UploadFile'

export interface DropAreaProps {
  title?: string | JSX.Element
  children?: JSX.Element | JSX.Element[]
  disabled?: boolean
}

export const DropArea = ({
  title = (
    <div>
      Drop files to upload
      <br />
      or click to select files
    </div>
  ),
  children,
  disabled = false,
}: DropAreaProps) => {
  const [isDragging, setDragging] = useState(false)

  const borderRadius = 24
  const borderColor = 'rgb(7, 73, 133)'
  const dashedBorder = `"data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='${borderRadius}' ry='${borderRadius}' stroke='${borderColor}' stroke-width='2' stroke-dasharray='2%2c 6' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e"`

  return (
    <Box
      onDragEnter={() => setDragging(true)}
      onDragLeave={() => setDragging(false)}
      sx={{
        position: 'relative',
        backgroundColor: isDragging ? 'selected.focus' : 'selected.hover',
        borderRadius: `${borderRadius}px`,
        border: 'none',
        backgroundImage: `url(${dashedBorder})`,
        textAlign: 'center',
        minHeight: 274,
        label: {
          padding: '48px 0',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          cursor: disabled ? 'default' : 'pointer',
        },
      }}
    >
      <label>
        <UploadFileIcon
          sx={{ color: 'primary.main', width: '60px', height: '60px' }}
        />
        <Typography variant="body1" sx={{ marginTop: 3, display: 'block' }}>
          {title}
        </Typography>
      </label>
      {children}
    </Box>
  )
}
