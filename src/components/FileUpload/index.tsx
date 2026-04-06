import { useRef } from 'react';
import Button from '../Button';
import { DeleteIcon, FileIcon } from '../../assets/icons';
import toast from 'react-hot-toast';

const MAX_FILES = 10;
const MAX_SIZE = 2 * 1024 * 1024;

const formatSize = (bytes: number) => {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

type FileUploadProps = {
  files: File[];
  onChange: (files: File[]) => void;
};

const FileUpload = ({ files, onChange }: FileUploadProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAdd = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(e.target.files || []);

    const valid = selected.filter((file) => {
      if (file.size > MAX_SIZE) {
        toast.error('That’s a big one! Try a file smaller than 2MB.');

        return false;
      }
      return true;
    });

    if (files.length + valid.length > MAX_FILES) {
      toast.error(`Maximum ${MAX_FILES} files allowed`);
    }

    onChange([...files, ...valid].slice(0, MAX_FILES));
    if (inputRef.current) inputRef.current.value = '';
  };

  const handleRemove = (index: number) => {
    onChange(files.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="border-gray-g4 flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed p-4">
        <Button variant="outlined" onClick={() => inputRef.current?.click()}>
          Upload
        </Button>

        <div className="flex flex-col items-center">
          <p className="text-gray-g3 text-xs">File type: .pdf, .txt, .md</p>
          <p className="text-gray-g3 text-xs">Max file size: 2mb, up to 10 files</p>
        </div>

        <input ref={inputRef} type="file" accept=".pdf,.txt,.md" multiple className="hidden" onChange={handleAdd} />
      </div>

      {files.length > 0 && (
        <ul className="flex flex-col gap-2">
          {files.map((file, index) => (
            <li key={index} className="bg-blue-b4 flex h-10 items-center justify-between rounded-lg px-3 py-2">
              <div className="flex items-center gap-2">
                <FileIcon />
                <p className="text-primary text-sm font-medium underline">{file.name}</p>
                <p className="text-xs text-gray-400">({formatSize(file.size)})</p>
              </div>

              <button onClick={() => handleRemove(index)} className="cursor-pointer">
                <DeleteIcon />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FileUpload;
