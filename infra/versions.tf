terraform {
  required_version = ">= 1.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

# Primary region for regional resources (S3 bucket).
provider "aws" {
  region = var.aws_region

  default_tags {
    tags = {
      Project     = "snap-motorsports"
      Environment = "prod"
      ManagedBy   = "terraform"
    }
  }
}

# CloudFront requires ACM certificates in us-east-1.
provider "aws" {
  alias  = "us_east_1"
  region = "us-east-1"

  default_tags {
    tags = {
      Project     = "snap-motorsports"
      Environment = "prod"
      ManagedBy   = "terraform"
    }
  }
}
