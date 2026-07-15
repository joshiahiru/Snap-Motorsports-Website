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
#
# default_tags applies to every resource type the AWS provider supports
# tagging on (S3, CloudFront, Route 53, IAM, ...) automatically, so no
# individual resource block needs its own `tags = {}`.
provider "aws" {
  region = var.aws_region

  default_tags {
    tags = {
      App         = "Snap Motorsports Website"
      Environment = var.env
      ManagedBy   = "Terraform"
    }
  }
}

# CloudFront requires ACM certificates in us-east-1.
provider "aws" {
  alias  = "us_east_1"
  region = "us-east-1"

  default_tags {
    tags = {
      App         = "Snap Motorsports Website"
      Environment = var.env
      ManagedBy   = "Terraform"
    }
  }
}
